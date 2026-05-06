import { motion, AnimatePresence } from "framer-motion";
import alextakaoContact from "@/assets/alextakao-contact.avif"
import Card from "@/components/ui/Card";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(1, "Nombre requerido"),
    email: z.string().email("Email inválido").min(1, "Email requerido"),
    subject: z.string().min(1, "Asunto requerido"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <div className="w-full p-2.5 lg:px-36 md:px-18 grid md:grid-cols-[auto_1fr] mb-2">
            <div className="hidden md:block w-96">
                <motion.div
                    className="sticky top-20"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, -20, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.6, ease: "easeOut" },
                        x: { duration: 0.6, ease: "easeOut" },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.6
                        }
                    }}
                    whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                >
                    <picture>
                        <source srcSet={alextakaoContact} type="image/avif" />
                        <img className="h-full object-contain" src={alextakaoContact} alt="Contacto AlexTakao" />
                    </picture>
                </motion.div>
            </div>
            <motion.div 
                className="w-full px-4 md:px-0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Card>
                    <div className="py-8 px-6 md:px-12 text-content flex flex-col items-center">
                        <motion.h1 
                            className="text-2xl md:text-3xl font-bold mb-6"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        >
                            ¡Pongámonos en contacto!
                        </motion.h1>
                        <motion.p 
                            className="text-content-gray-dark text-center mb-8 max-w-xl"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        >
                            ¿Tienes un proyecto en mente o simplemente quieres conversar? Envíame un mensaje y te responderé lo antes posible.
                        </motion.p>
                        <div className="w-full max-w-2xl">
                            <form onSubmit={handleSubmit(console.log)} className="space-y-6">
                                <motion.div
                                    key="name-field"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                                >
                                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-content">
                                        Nombre *
                                    </label>
                                    <input
                                        id="name"
                                        {...register("name")}
                                        placeholder="Tu nombre completo"
                                        className="w-full px-4 py-3 border-2 border-content bg-surface text-content placeholder:text-content-gray-dark focus:outline-none focus:shadow-offset-sm transition-all duration-200"
                                    />
                                    <AnimatePresence mode="wait">
                                        {errors.name && (
                                            <motion.span 
                                                className="text-red-500 text-sm mt-1 block"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {errors.name.message}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div
                                    key="email-field"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                                >
                                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-content">
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email")}
                                        placeholder="tu@email.com"
                                        className="w-full px-4 py-3 border-2 border-content bg-surface text-content placeholder:text-content-gray-dark focus:outline-none focus:shadow-offset-sm transition-all duration-200"
                                    />
                                    <AnimatePresence mode="wait">
                                        {errors.email && (
                                            <motion.span 
                                                className="text-red-500 text-sm mt-1 block"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {errors.email.message}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div
                                    key="subject-field"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                                >
                                    <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-content">
                                        Asunto *
                                    </label>
                                    <input
                                        id="subject"
                                        {...register("subject")}
                                        placeholder="¿De qué quieres hablar?"
                                        className="w-full px-4 py-3 border-2 border-content bg-surface text-content placeholder:text-content-gray-dark focus:outline-none focus:shadow-offset-sm transition-all duration-200"
                                    />
                                    <AnimatePresence mode="wait">
                                        {errors.subject && (
                                            <motion.span 
                                                className="text-red-500 text-sm mt-1 block"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {errors.subject.message}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.div
                                    key="message-field"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                                >
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-content">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id="message"
                                        {...register("message")}
                                        placeholder="Cuéntame sobre tu proyecto o idea..."
                                        rows={6}
                                        className="w-full px-4 py-3 border-2 border-content bg-surface text-content placeholder:text-content-gray-dark focus:outline-none focus:shadow-offset-sm transition-all duration-200 resize-none"
                                    />
                                    <AnimatePresence mode="wait">
                                        {errors.message && (
                                            <motion.span 
                                                className="text-red-500 text-sm mt-1 block"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {errors.message.message}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.button
                                    key="submit-button"
                                    type="submit"
                                    className="w-full px-8 py-4 bg-content text-content-inverse border-2 border-content font-bold text-lg"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
                                    whileHover={{ scale: 1.02, boxShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
                                    whileTap={{ scale: 0.98, x: 1, y: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                                >
                                    Enviar mensaje
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}

export default Contact;