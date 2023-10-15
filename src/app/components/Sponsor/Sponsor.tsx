import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <div className="bg-[#1a1b1c]">
      <div className="layout py-[2.5rem] lg:pt-[5.3rem] lg:pb-[4.7rem]">
        <div className="flex justify-center items-center gap-[2rem] lg:gap-[3rem]">
          <div className="max-w-[3.4375rem] lg:max-w-[5.3125rem]">
            <Image
              alt="dreamtürk"
              width={100}
              height={100}
              className="w-full h-full"
              src="https://s3-alpha-sig.figma.com/img/8ea8/1689/cbef2278f5176a1c7e87e51a4573ae05?Expires=1698019200&Signature=p4z1j-Qui0Mz6qZTc6YGxWZ3fQ4CYj7O522WQXYpYS2-rGPPv4fjDe4GsTWj3dHszTjDFFHCKLtN1oqoK0PB~lTI9WzA-e8Toz5h-4debWFOYye7s4wiQV4ejonP0E6r51XIbZdGGrq8b7U-o81vQBi2oggYbPeGvLZ0HjOQTA7pIvaFnoY2BL91tkdtWBmti6qOZ0ru6~dziLqeHGetrBEoayaAuOjEm3l14TZVFD9192WrcJpHnI~VglzVvpZW4~M7PvjopD1VBi8han0XAnrhuN8McBJyw6wO6rUikQl4~tlnQbBjY9hOZHSQNegOAHgNiXI8hdyickdW3FDYvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
          </div>
          <div className="max-w-[6.875rem] lg:max-w-[10.6875rem]">
            <Image
              alt="radyo104"
              width={100}
              height={100}
              className="w-full h-full"
              src="https://s3-alpha-sig.figma.com/img/6673/f08d/c4a1696cd296af6c55f7030af0ad13b2?Expires=1698019200&Signature=e3ltPeJH06Ft~euI-PZSOeg7GF4P9t3TOKZ1y78jZ9zIG6lpJ4xrcp6zQ6gOqmfcZSUPLTDETrgae~G1kE3rTy5JMCQw7OSWr27UUhXv5jQneCcSoc1kJj4QuR6Sa~yyS4AFibIXATsRTKG~jFPSMq-MPTKmgeddCZSP~v7fKwJ2eKCEJcT-yQjHmAcU8rILVeYEHVv5Pqv1SIwDqsaBB7phgu3GaU4~~8eM1BM4HjIsusEYNs9yGxQs5eQNLfncp6olhOccEl6haAxqF5j3KiAu3nIzPi845W68aGE62uUwBnc3LDExa0k3c16O5gRbhcpdeywRl1DXxiThk-KhBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
