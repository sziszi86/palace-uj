import { motion } from "framer-motion";
import QuotationForm from "@/components/forms/quotation-form";

const SectionQuotation = () => {
  return (
    <section className="relative bg-white py-16 before:absolute before:inset-0 before:z-[1] before:bg-foreground/75 lg:py-28">
      <img
        src="quotation_form_bg.jpg"
        alt="free quotation"
        className="object-cover object-center absolute w-full h-full inset-0"
      />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
          }}
        >
          <QuotationForm />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionQuotation;
