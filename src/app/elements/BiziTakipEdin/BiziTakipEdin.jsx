import Image from "next/image";
import facebook from "../../../../public/icons/facebook.svg";
import instagram from "../../../../public/icons/instagram.svg";
import twitter from "../../../../public/icons/twitter.svg";
import whatsapp from "../../../../public/icons/whatsapp.svg";
import youtube from "../../../../public/icons/youtube.svg";
import facebookRed from "../../../../public/icons/facebookRed.svg";
import instagramRed from "../../../../public/icons/instaRed.svg";
import twitterRed from "../../../../public/icons/xRed.svg";
import whatsappRed from "../../../../public/icons/whatsappRed.svg";
import youtubeRed from "../../../../public/icons/youtubeRed.svg";

const BiziTakipEdin = ({ bColor, position }) => {
  return (
    <div
      className="flex items-center w-full layout"
      style={{ justifyContent: `${position}` }}
    >
      <div
        style={{ borderColor: `${bColor}` }}
        className={`flex items-center justify-center mt-[2.25rem] border-solid border-[1px] rounded-full px-[1.5rem] py-[1rem]`}
      >
        <div className="mr-[2.5rem] text-[0.625rem]">Bizi takip edin</div>
        {bColor === "red" ? (
          <div className="flex gap-[0.5rem]">
            <a href="" className="w-[1.125rem]">
              <Image
                src={facebookRed}
                width={100}
                height={100}
                alt="facebook"
              />
            </a>
            <a href="" className="w-[1.125rem]">
              <Image
                src={instagramRed}
                width={100}
                height={100}
                alt="instagram"
              />
            </a>
            <a href="" className="w-[1.125rem]">
              <Image src={twitterRed} width={100} height={100} alt="x" />
            </a>
            <a href="" className="w-[1.125rem]">
              <Image
                src={whatsappRed}
                width={100}
                height={100}
                alt="whatsapp"
              />
            </a>
            <a href="" className="w-[1.125rem]">
              <Image src={youtubeRed} width={100} height={100} alt="youtube" />
            </a>
          </div>
        ) : (
          <div className="flex gap-[0.5rem]">
            <a href="" className="w-[1.125rem]">
              <Image src={facebook} width={100} height={100} alt="facebook" />
            </a>
            <a href="" className="w-[1.125rem]">
              <Image src={instagram} width={100} height={100} alt="instagram" />
            </a>
            <a href="" className="w-[1.125rem]">
              <Image src={twitter} width={100} height={100} alt="x" />
            </a>
            <a href="" className="w-[1.125rem]">
              <Image src={whatsapp} width={100} height={100} alt="whatsapp" />
            </a>
            <a href="" className="w-[1.125rem]">
              <Image src={youtube} width={100} height={100} alt="youtube" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiziTakipEdin;
