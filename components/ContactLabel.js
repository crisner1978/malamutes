import { modalState } from "atoms/modalAtom";
import { useRecoilState } from "recoil";


const ContactLabel = ({style = false}) => {
    const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className={`contactLabel ${style}`}> 
      <span onClick={() => setOpen(true)}>Contact Us</span>
    </div>
  );
};

export default ContactLabel;
