import path from "path";
import { fileURLToPath } from "url";

// Нужно, чтобы работал path.join в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
    prependData: `
      @import "fonts.scss";
      @import "variables.scss";
    `,
  },
};

export default nextConfig;
