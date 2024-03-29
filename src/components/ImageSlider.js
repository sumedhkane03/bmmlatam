import { AuthErrorCodes } from "firebase/auth";
import { useRef, useState } from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex,setCurrentIndex] = useState(0);

    
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const sliderStyles = {
        height: "100%",
        position: "relative",
    };

    const leftArrow = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        left: "32px",
        fontSize: "45px",
        color: "fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrow = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        right: "32px",
        fontSize: "45px",
        color: "fff",
        zIndex: 1,
        cursor: "pointer",
    };
    
    const caption = useRef('HELLOOOOO');

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        caption.current = slides[newIndex].title;

    };

    const goToNext = () => {
        const isLastSlide = currentIndex === (slides.length - 1);
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        caption.current = slides[newIndex].title;
    };

    

    return (
    <>
    <div style={sliderStyles}>

        <div style={leftArrow} onClick={goToPrev}> ← </div>
        <div style={rightArrow} onClick={goToNext}> → </div>

        <div style={slideStyles}></div>

        
    </div>
    
    

    </>
    )
};

export default ImageSlider;