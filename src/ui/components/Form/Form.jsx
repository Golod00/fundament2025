"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./Form.module.scss";
import TextTitle from '@/ui/components/TextTitle';

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPhone = (value) => {
    let digits = value.replace(/\D/g, "");
    if (!digits.startsWith("38")) digits = "38" + digits;
    digits = digits.slice(0, 12);
    let formatted = "+";
    if (digits.length > 0) formatted += digits.substring(0, 2);
    if (digits.length >= 3) formatted += " (" + digits.substring(2, 5);
    if (digits.length >= 6) formatted += ") " + digits.substring(5, 8);
    if (digits.length >= 9) formatted += "-" + digits.substring(8, 10);
    if (digits.length >= 11) formatted += "-" + digits.substring(10, 12);
    return formatted;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === "phone" ? formatPhone(value) : value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Вкажіть Ім’я та Прізвище";
    if (!formData.phone) newErrors.phone = "Вкажіть телефон";
    else {
      const digits = formData.phone.replace(/\D/g, "");
      const number = digits.startsWith("38") ? digits.slice(2) : digits;
      if (number.length !== 10) newErrors.phone = "Телефон повинен містити рівно 10 цифр";
    }
    if (!formData.email) newErrors.email = "Вкажіть email";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) newErrors.email = "Введіть коректний email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getUtmFromStorage = () => {
    if (typeof window === "undefined") return {};
    const raw = localStorage.getItem("ct_utm");
    if (!raw) {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"];
      const utm = {};
      utmKeys.forEach(key => utm[key] = params.get(key) || "(not set)");
      localStorage.setItem("ct_utm", JSON.stringify({ utm }));
      return utm;
    }
    try {
      return JSON.parse(raw).utm || {};
    } catch(e) {
      return {};
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const utmData = getUtmFromStorage();
      const res = await fetch("/api/send-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ...utmData }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);

        const utmData = getUtmFromStorage();

        const leadData = {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          ...utmData
        };

        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: 'lead',
            page: 'thanks-page',
            ...leadData
          });
        }

        setFormData({ name: "", phone: "", email: "" });
        setErrors({});

        setTimeout(() => {
          router.push("/thanks-page");
        }, 200);
      }
    } catch (err) {}
  };

  return (
      <div className={classes.formWrapper}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextTitle className={classes.wrap}>
            <input className={`${classes.input} ${errors.name ? classes.inputError : ""}`} type="text" name="name" placeholder="Ім’я та Прізвище" value={formData.name} onChange={handleChange} />
            {errors.name && <p className={classes.error}>{errors.name}</p>}
          </TextTitle>
          <TextTitle className={classes.wrap}>
            <input className={`${classes.input} ${errors.phone ? classes.inputError : ""}`} type="tel" name="phone" placeholder="+38 (___) ___-__-__" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className={classes.error}>{errors.phone}</p>}
          </TextTitle>
          <TextTitle className={classes.wrap}>
            <input className={`${classes.input} ${errors.email ? classes.inputError : ""}`} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className={classes.error}>{errors.email}</p>}
          </TextTitle>
          <button type="submit" className={classes.btn}>Купити квиток</button>
        </form>
      </div>
  );
}