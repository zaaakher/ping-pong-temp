import { useEffect, useRef, useState } from "react";
import { useWindowSize, useWindowScroll } from "react-use";
const BGAnimation = () => {
  const ref = useRef();
  const screenSize = useWindowSize();
  const cScroll = useWindowScroll();
  const frameCount = 130;
  const [theme, setTheme] = useState("light");
  const currentFrame = (index) => {
    // console.log("iiiiiiii", index.toString().padStart(4, "0"));
    return `https://xakher-images.s3.ap-southeast-1.amazonaws.com/pingpong-${theme}/${index
      .toString()
      .padStart(4, "0")}.png`;
  };

  useEffect(() => {
    // console.log("canv issssssss", ref.current);
    let ctx = ref.current.getContext("2d");
    // console.log("ctxxx issssssss", ctx);

    const html = document.documentElement;
    // console.log("html is ", html);
    // const body = document.getElementsByName("body");
    const canvas = ref.current;
    // canvas.style.position = "absolute";
    // canvas.style.left = "0px";
    // canvas.style.top = "0px";
    // canvas.style.width = "100%";
    // canvas.style.height = "100vh";
    // canvas.style.zIndex = "-100";

    // canvas.style.background = 'red';
    // document.body.appendChild(canvas);
    // const canvas = ref;
    console.log("canvas is ", canvas);
    // canvas.width = document.body.clientWidth; //document.width is obsolete
    // canvas.height = document.body.clientHeight; //document.height is obsolete

    const context = canvas.getContext("2d");
    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };
    // preloadImages();

    const img = new Image();
    img.src = currentFrame(1);
    // canvas.width = 2000;
    console.log("screen width is :", screenSize.width);
    canvas.width = screenSize.width;
    canvas.height = screenSize.height;
    console.log("canvas width is :", canvas.width);
    // canvas.height = 3000;
    img.onload = function () {
      console.log("img width is :", img);
      // img.width = 200;
      context.drawImage(
        img,
        0,
        0,
        screenSize.width,
        screenSize.height

        // screenSize.width / (16 / 9)
      );
      // img.width = 2000;
      // img.height = screenSize.height;
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(
        img,
        0,
        0,
        screenSize.width,
        screenSize.height

        // screenSize.width / (16 / 9)
      );
    };
    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop; //from 0 to 1
      console.log("scroll friction", scrollFraction);
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });
    preloadImages();
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "lightblue",
        // width: "100%",
        height: "100vh",
        zIndex: -1,
        position: "fixed",
        top: 0,
        left: 0,
        // width: "100%",
      }}
    >
 
      <canvas
        style={{
          backgroundColor: "red",
          border: "1px solid black",
          // width: "100%",
          // height: "100vh",
          // position: "fixed",
          // left: "50%",
          // top: "50%",
          // maxHeight: "100vh",
          // maxWidth: "100vw",
          // transform: "translate(-50%, -50%)",
        }}
        ref={ref}
      />
    </div>
  );
};
export default BGAnimation;
