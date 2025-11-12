import { cn } from "@/lib/utils";
import { SectionSubtitle, type SectionSubtitleProps } from "./section-subtitle";

interface SectionHeaderProps extends SectionSubtitleProps {
  title: string | React.ReactElement;
  titleClassName?: string;
  containerClassName?: string;
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleClassName,
  containerClassName,
  ...subtitleProps
}) => {
  return (
    <div className={cn(containerClassName)}>
      <SectionSubtitle {...subtitleProps} />
      <h2 className={cn("font-header text-3xl", titleClassName)}>{title}</h2>
    </div>
  );
};
