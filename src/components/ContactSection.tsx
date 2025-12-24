import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<ContactForm> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactForm;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent",
      description: "Thank you for your inquiry. We will respond shortly.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding border-t border-border/10">
      <div className="section-container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="lg:col-span-4"
          >
            <h2 className="text-foreground mb-8">
              Contact
            </h2>
            <p className="text-muted-foreground leading-loose max-w-sm">
              For inquiries about our firm or investment opportunities, 
              please reach out using the form.
            </p>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="lg:col-span-8 lg:pt-4"
          >
            <form onSubmit={handleSubmit} className="max-w-lg space-y-10">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-0 py-4 bg-transparent border-b text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-all duration-500 text-lg ${
                    errors.name ? "border-destructive" : "border-border/20 focus:border-foreground/30"
                  }`}
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="mt-3 text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-0 py-4 bg-transparent border-b text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-all duration-500 text-lg ${
                    errors.email ? "border-destructive" : "border-border/20 focus:border-foreground/30"
                  }`}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="mt-3 text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-0 py-4 bg-transparent border-b text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-all duration-500 resize-none text-lg ${
                    errors.message ? "border-destructive" : "border-border/20 focus:border-foreground/30"
                  }`}
                  placeholder="Message"
                />
                {errors.message && (
                  <p className="mt-3 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
