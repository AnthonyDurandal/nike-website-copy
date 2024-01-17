export const BannerSlide = (props: BannerSlideProps) => {
  return (
    <div className="w-full flex-shrink-0 text-center text-dark transform transition-transform duration-1000 translate-x-0">
    {/* <div className="w-full flex-shrink-0 text-center text-dark transform transition-transform duration-1000 translate-x-full"> */}
      <p className="text-base">{props.message}</p>
      <span className="text-xs underline">
        <p>
          <a href={props.to}>{props.action}</a>
        </p>
      </span>
    </div>
  );
};

export type BannerSlideProps = {
  to: string;
  index: number;
  showSlideButton?: boolean;
  toPreviousBanner?: void;
  toNextBanner?: void;
} & BannerType;

export type BannerType = {
  message: string;
  action: string;
};