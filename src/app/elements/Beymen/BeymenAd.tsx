import Image from "next/image";
import React from "react";

const BeymenAd = () => {
  return (
    <div className="my-3 lg:my-[4rem] px-[1.5rem] sm:px-[6rem] md:px-[9.5rem]">
      <div className="layout">
        <Image
          alt="a"
          width={500}
          height={400}
          className="w-full h-full"
          src="https://s3-alpha-sig.figma.com/img/eac3/3d62/dc098127eca0fe81c3efa93d9f5ceead?Expires=1698019200&Signature=LeAvnqPyR1vOK3IzuhoUNQKFpdwKk7xNqhfooq0Q67z~oB~c014epFcekbag~Yykklz-Pmv1hh8S9661sKmXR9StyWeLAmzJn5MfqtX08tvkgLewwjIpY6O1xwMJCubPwZiX4qxDRI7zljUBzt8sr7O5RElgB-641ZKttqwaV5iRgeUtvo9rJfE6LawkO7FNPTU2a5ORPBIIvk94qMV2KiSRWe92fMgTV7fmLwaQ5ToKUGoftJF-6KdUQMMLlqi5Hsz8YtIfUyrLc~AaPtMqSWwamVXjvTx~C4DLjKi54LoXhe2CT2H8zjTy71atMsr2fyEzzaFG7aUeIQzCKb~dRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
      </div>
    </div>
  );
};

export default BeymenAd;
