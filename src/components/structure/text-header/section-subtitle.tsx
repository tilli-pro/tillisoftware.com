import { cn } from "@/lib/utils";

export interface SectionSubtitleProps {
  subtitle?: string | React.ReactElement;
  subtitleClassName?: string;
  subtitleIcon?: React.ReactElement;
}
export const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
  subtitle,
  subtitleClassName,
  subtitleIcon,
}) => {
  if (!subtitle) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-1 font-header font-medium text-muted-foreground text-sm uppercase leading-none",
        subtitleClassName,
      )}
    >
      {subtitleIcon}
      <span>{subtitle}</span>
    </div>
  );
};
