import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string | React.ReactElement;
  subtitle?: string | React.ReactElement;
  titleClassName?: string;
  subtitleClassName?: string;
  subTitleIcon?: React.ReactElement;
  containerClassName?: string;
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  subTitleIcon,
  containerClassName,
}) => {
  return (
    <div className={cn(containerClassName)}>
      {subtitle && (
        <div
          className={cn(
            "flex items-center gap-1 font-header font-medium text-muted-foreground text-sm uppercase",
            subtitleClassName,
          )}
        >
          {subTitleIcon}
          <span>{subtitle}</span>
        </div>
      )}
      <h2 className={cn("font-header text-3xl", titleClassName)}>{title}</h2>
    </div>
  );
};
