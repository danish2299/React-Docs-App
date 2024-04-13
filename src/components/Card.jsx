import { FaFileInvoice } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion"

function Card({ props , referance }) {
  return (
    <motion.div drag dragConstraints={referance} whileDrag={{scale: 1.2}} dragElastic={0.1} className=" relative w-60 h-72 flex-shrink-0 rounded-[35px] bg-zinc-900/90 p-5 text-white py-10 px-8 overflow-hidden">
      <FaFileInvoice></FaFileInvoice>
      <p className="mt-4 leading-tight text-sm font-semibold">{props.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full h-15">
        <div className="flex items-center justify-between px-8 py-5">
          <h5>{props.filesize}</h5>
          <GoDownload></GoDownload>
        </div>
        {props.tag.isOpen ? (
          <div className={`tag w-full py-4 bg-blue-600`}>
            <h3 className="text-sm font-semibold flex items-center justify-center">
              {props.tag.tagTitle}
            </h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
