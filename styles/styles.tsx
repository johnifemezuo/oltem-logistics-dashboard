import tw from "tailwind-styled-components";

export const AuthWrapper = tw.div`
    w-[550px]  h-auto
` as any;

export const AuthLeftLayoutWrapper = tw.div`
    grid md:flex 
    w-full 
    h-screen 
` as any;

export const AuthLeftLayoutContent = tw.div`
    md:w-[1300px] 
    bg-app-bg
    py-8 px-14  
    space-y-24 
    hidden md:block
` as any;

export const AuthLeftLayoutInfoHeader = tw.h1`
    text-2xl 
    md:text-3xl 
    font-semibold 
    leading-loose 
    text-slate-700
` as any;

export const AuthLayoutOutlet = tw.div`
    col-span-2 
    w-full 
    grid
    place-content-center 
    
` as any;

export const FormWrapper = tw.div`
    text-center space-y-4
` as any;

export const InnerContentWrapper = tw.div`
    md:w-[600px] mx-auto space-y-12
` as any;


// form styles


interface Iinput {
  isvalid: boolean | string;
  disabled: boolean;
}

export const InputLabel = tw.label`
    after:content-['*'] 
    after:ml-0.5 
    after:text-primary-color 
    text-zinc-500 text-sm group 
 
` as any;

export const InputWraper = tw.div`
    w-full flex bg-white mt-2  
    border rounded-lg
    relative

` as any;

export const UploadImageWrapper = tw.div`
    w-full flex bg-white mt-2  
    border rounded-lg border-dashed 
    relative hover:border-primary-color transition

` as any;

export const Input = tw.input<Iinput>`
    bg-white rounded-md text-lg 
    focus:ring-1 shadow-sm border-slate-300 placeholder-slate-400
    placeholder:text-md 
    focus:outline-none 
    w-full py-3.5 px-4 transition duration-300
    text-md
      
    ${(p) => (p.disabled === true ? "bg-zinc-100 text-zinc-500" : "bg-white text-zinc-700")}
        
    ${(p) =>
      p.isvalid === "true"
        ? "focus:ring-danger-color text-danger-color"
        : "focus:ring-primary-color"}

` as any;

export const PhoneInputStyle = tw.input<Iinput>`
    bg-white rounded-md text-lg 
    focus:ring-1 shadow-sm border-slate-300 placeholder-slate-400
    placeholder:text-md 
    focus:outline-none transition duration-300
    w-full py-3 px-4 pl-[120px]
      
    
    ${(p) => (p.isvalid ? "focus:ring-danger-color text-danger-color" : "focus:ring-primary-color")}

` as any;

export const TickStyle = tw.span<Iinput>`
    w-[30px] grid place-content-center
    px-5 text-success-color
    absolute right-0 bottom-4 transition duration-300

` as any;

export const ShowPassword = tw.span`
    w-[30px] grid place-content-center
    px-6 
    absolute right-0 top-0 h-full 
    rounded-tr-md rounded-br-md bottom-4
    text-[#899BAC]

` as any;

export const ErrorSpan = tw.p`
    my-1 text-left right-0 text-sm text-danger-color absolute space-x-1 flex--items 
` as any;

// otp

export const OtpInputContainer = tw.div`
  border bg-red p-4
` as any;
