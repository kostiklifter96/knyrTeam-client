declare module "*.module.scss";
declare module "*.module.css";
declare module "*.jpg" {
    const src: string;
    export default src;
}
