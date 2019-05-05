import * as shell from "shelljs";

shell.cp("-R", "src/config/*.json", "dist/config/");
// shell.cp("-R", "src/public/fonts", "dist/public/");
// shell.cp("-R", "src/public/images", "dist/public/");