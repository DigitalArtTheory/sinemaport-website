import Image from "next/image";
import React from "react";
import BeymenAd from "../elements/Beymen/BeymenAd";
import BeymenAd2 from "../elements/Beymen/BeymenAd2";
import Sponsor from "../components/Sponsor/Sponsor";

const page = () => {
  const yazarlar = [
    {
      yazarName: "Özden Sevgi Diler",
      yazarImage:
        "https://s3-alpha-sig.figma.com/img/d228/37ab/75803a13922939a5872df83ed23d6279?Expires=1699228800&Signature=e48FfjftcLHK5w~LrCk23ZgNZdfE51abAGLWrq1o8Nd-t4h0gdzybnTaGkCCnuG429b1SDpLo0XRALTPFc~1nHJd7QTTSd2pDHP4Y3WZVvQLD-2eyZ7V4o8RJrn~Z3DxBAseFmHyTqT6rdlyvlkNz11NCcSjwSP4YceE~uD1mzaH7rfJQtMYabh2hNSkkYk2hy4IX-wv2fFtj4h9EyAO2M-EejUnfr7ARFYnH3QemISOKCshFm3s0GTpv4MOhqa6V4CcxXJJMV5-Kutw8Sv1LACz1gKcZMzKzs9FGLp8vfjBilOT0R0gPSpwllNvr55oa8atwjgS~XCRK5xLUmqXhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      yazarName: "Özden Sevgi Diler",
      yazarImage:
        "https://s3-alpha-sig.figma.com/img/e220/27ce/cdfb47e2573ae13403a63ecc9149dd26?Expires=1699228800&Signature=VNVEBL4VovUW5xd6q7zVdWD2QR~UDh2ip5YfGV4Efaw5FRCuRyulJcX6XdAcJXg6h2B0VmJSHvJWkZHtzw031MFTcyVSHJ4mAX9UAeIEU-l9jtpH8buLzzxc-SGXLIzHUQae-e2Ow4~iQePxjPHb~xWGbTKjL3EFJqvpemFZVeLGJsPFfJGOrldRYQfjDZL~02fiYeFME-oYuC379Ehmn5r7R1t4FvGrlKBCJv20j06tAbRhv33V~NQe9NO9Opfd7NAKRHcaLDABE9rpS3j3Ftspla4xsswddC2IkOHFzkdFuBf59pvmg2go~pCNujj4~roTFJ-9XiUkHp1WJhf~4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      yazarName: "Özden Sevgi Diler",
      yazarImage:
        "https://s3-alpha-sig.figma.com/img/a719/e494/b25381c2d1e0511769686ef48903be7a?Expires=1699228800&Signature=fjZTbF0plnXIFtndHS7oOEtNJWu~Io~3K-LXVW9ublviyCoS0eIjOwdzcbYCH0zs5lY1Fd-mRo-rsGf52uc2j87S0VMOwtsgg1fsW19JaoL~NT1B7Rcu3-r2H~8B5yHLE4fHnrOkxRbluqYxfgVC2IQx2wVseIBtFodHJ1ys7dHUlOcfyxUJyFXLyCIUIo5L~ArW1zvaIQLEwsw0fgeiIQpvTy0iuKHJNOpcnZokRMpBH8jfIgoHlIJKrGgbfc50rimryeS9TN1H-kEwXTLBLUi7dabMhXnTguEbTRdc8~hZCwboCVICUAwENKFkBfnMH1XRyPEbIfwV3WmGoP~MYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      yazarName: "Özden Sevgi Diler",
      yazarImage:
        "https://s3-alpha-sig.figma.com/img/7fb0/3457/3d2bcdf3ad898e8fbe3e3d494f005140?Expires=1699228800&Signature=DBRaJKA8E4t-eBSVfluEibGfz9XtQ0nX~gX8WoNUk9xojyrkcsA0JMs7rJbW4HVPFHBmEIkG1FPFQE05fZfVrD9NXaDJWir9s-oDaU0QoY0K1svhyXIL9hyQbWwroeRI4wTfaO4rvc48t3w-df2BuIUpKi9rxZs32wjnwtplctHIDDNqg~6u4W~JURfM39c3Yst6KT-RI93MBcJFy6-cC4Ab8fufH7Fb5kmC~9WfEnY~vPj63~u6taTCEPubv~qczgnobmL55XDhTXWZFSwXhbrMP0FjYoH9Lo1sFsNuTncNiYFzsuUAXRGQqIUwk377j02GG1A6PhtTuwE4yzQCTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      yazarName: "Özden Sevgi Diler",
      yazarImage:
        "https://s3-alpha-sig.figma.com/img/036a/cbf4/97bfbbe42697e361fbf0fc8944a306df?Expires=1699228800&Signature=baDeRcx6YJy~jFIUR1ETN8Gf-qWb6mFQJa~idPkeWh-2zoEr~FjOM7ITO2vup7L8COoVmTsMSGMnxgRKtcJui3DEDAD5-cPon5jGovEUfyQqgocBxddc4KG07wfUZDCpGvdo-imHnhYO1X4EF66q~M~~3~YKdCh9G0rL4IszpMdEYzeAYWckOz3aYfzcQMSxub2~8t-J10dyQSprVs52ScKtzWL4~~Ez8DXcBJap4edGpH9LAnnyBIMapzkwuHOF79LbRlqH1xYP6nJDcsxMgOYWq-3e~gY3C~n~TbHa7eR2bXuHuN3QuztmHeaegA3riTHF1Sd2O7eGQfVxhMP33g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      yazarName: "Özden Sevgi Diler",
      yazarImage:
        "https://s3-alpha-sig.figma.com/img/4956/a2a3/ef8c6d1c91885fa08b331b4e8d9cd652?Expires=1699228800&Signature=qA9~-3~OB08Gg1ycdSlb0-RaRZmZorPcNFbiVulPg~v9A~8sMZosxRD~kKqQemhceUAXkYSMtLR18Bi9gSCUUaIYJd2phmpE1NTLqw7jlWx7I9ht0wQWD38q5VMj5geqmVMXsUosy3BvgG2HnB21mrUR6fQq2qpfduzBevTnbo5j~J2XYRklrbEQDgC-2IJmzWwU9LPbuvmiAaUFErhP0PoYATZKR592YSBZhhJdAXDdD8jungDafudILwGlc61AqtINCkvP9a4S6sxtM8wM2Z6KEQQR28kpM30SSxtFAqPTfVP7jOB4QJ0JlHR7eppqokexsrN30ilXQtakqBEcAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  return (
    <div>
      <div className="mt-3 md:mt-20 mb-12 px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
        <div className="layout">
          <h2 className="text-[1.5rem] md:text-[2rem] font-semibold">
            Yazarlar
          </h2>
          <div className="flex flex-wrap justify-between gap-y-[0.5rem] mt-[3.3rem]">
            {yazarlar.map((yazar) => (
              <div className="flex flex-col gap-[1.38rem]">
                <div className="max-w-[10.875rem] h-[10.875rem] min-w-[10rem]">
                  <Image
                    src={yazar.yazarImage}
                    alt="yazar"
                    width={100}
                    height={100}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="text-[0.875rem] md:text-[1.125rem] italic text-center">
                  {yazar.yazarName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BeymenAd2 />
      <Sponsor />
    </div>
  );
};

export default page;
