import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
   
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

  return (
    <div className="relative cursor-pointer">
    {" "}
    {showTopBtn && (
        <BsFillArrowUpCircleFill
            className="fixed bottom-5 right-5 z-20 text-green-600"
            size={38}
            onClick={goToTop}
        />
    )}{" "}
</div>
  );
};
<BsFillArrowUpCircleFill />

export default ScrollToTopButton;
