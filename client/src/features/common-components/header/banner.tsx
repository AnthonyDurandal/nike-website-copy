import { useEffect, useState } from "react";
import { BannerType, BannerSlide } from "@features/common-components";

enum DIRECTION_TYPE {left=-1, right=1}

export const Banner = (props: {
  // children: ReactElement<BannerSlideProps>[] | ReactElement<BannerSlideProps>;
  banners: BannerType[];
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<DIRECTION_TYPE>(DIRECTION_TYPE.right);

  useEffect(() => {
    const interval = setInterval(()=>{
      nextSlide();
    }, 3000)

    return () => {clearInterval(interval)}
  }, [currentSlide]);

  const nextSlide = () => {
    const nextSlideIndex = getNextSlideIndex();
    changeDirection(nextSlideIndex);
    setCurrentSlide(nextSlideIndex);
  }

  const changeDirection = (nextSlideIndex : number) => {
    if (currentSlide + DIRECTION_TYPE.left === nextSlideIndex)
      setDirection(DIRECTION_TYPE.left);
    else setDirection(DIRECTION_TYPE.right);
  }

  const getNextSlideIndex = () : number => {
    if(direction === DIRECTION_TYPE.right){
      if(currentSlide === props.banners.length -1) return direction + DIRECTION_TYPE.left
      else return direction + DIRECTION_TYPE.right
    }
    if(currentSlide === 0) return direction + DIRECTION_TYPE.right
      else return direction + DIRECTION_TYPE.left
  }

  const moveToSlide = (direction : DIRECTION_TYPE) => {
    const nextSlideIndex = currentSlide + direction;
    changeDirection(nextSlideIndex);
    setCurrentSlide(nextSlideIndex);
  }

  return (
    <div className="w-full max-w-screen h-fit min-h-[58px] pt-2.5 flex flex-nowrap overflow-hidden bg-secondary">
      {props.banners.map((banner, index) => (
        <BannerSlide {...banner} index={index} to="#"/>
      ))}
    </div>
  );
};

// make this element receive data props from the api
