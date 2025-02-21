import React from "react";

type ContactProps = {
  children: React.ReactNode;
  className?: string;
};

const Contact: React.FC<ContactProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`absolute mx-auto w-full bg-[radial-gradient(circle_at_5%_400%,#1e1e5d,#1e1e5d,#1e1d5c,#1e1b59,#1d1753,#1c1249,#1a0b3a,#17072e,#140526,#130422,#120420,#120420)] pb-[110px] pt-[110px] sm:px-6 lg:px-8 ${className}`}
    >
      Contact
      <p>
        I'm currently looking to join a cross-functional team that values
        improving people's lives <br />
        through accessible design. or have a project in mind? Let's connect.
      </p>
      {children}
      <p>Asad</p>
    </div>
  );
};

export default Contact;
