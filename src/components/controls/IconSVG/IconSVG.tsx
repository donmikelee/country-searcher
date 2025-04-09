import Icons from "../../../style/partials/icons.svg?url";

interface IconSVGProps {
  name: string;
  alternateClass?: string;
}

const IconSVG: React.FC<IconSVGProps> = ({ name, alternateClass = "" }) => (
  <svg className={`icon icon-${name} ${alternateClass}`}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

export default IconSVG;
