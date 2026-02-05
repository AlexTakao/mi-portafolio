import { motion } from "framer-motion";
import alextakaoContact from "@/assets/alextakao-contact.avif"
import Card from "@/components/ui/Card";
import { FloatingField } from "@/components/ui/fields/FloatingFieldProps";
import { useForm } from "react-hook-form";
import ButtonPrincipal from "@/components/ui/Button";
import PhoneField from "@/components/ui/fields/PhoneField";

type FormValues = {
    nombre: string;
    apellido: string;
    telefono: string;
    password: string;
};

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <div className="w-full p-2.5 lg:px-36 md:px-18 grid md:grid-cols-[auto_1fr] mb-2">
            <div className="hidden md:block w-96">
                <motion.div
                    className="sticky top-20"
                    animate={{
                        y: [0, -20, 0], // Sube 20 pixeles y vuelve a bajar
                    }}
                    transition={{
                        duration: 3,      // Tiempo que tarda una vuelta completa
                        repeat: Infinity, // Se repite para siempre
                        ease: "easeInOut" // Suaviza el inicio y el final del movimiento
                    }}
                >
                    <picture>
                        <source srcSet={alextakaoContact} type="image/avif" />
                        <img className="h-full object-contain" src={alextakaoContact} alt="Contacto AlexTakao" />
                    </picture>
                </motion.div>
            </div>
            <div className="w-full px-4 md:px-0">
                <Card>
                    <div className="py-4 px-8 text-content flex flex-col items-center">
                        <h1 className="text-xl md:text-2xl font-bold mb-4">¡Pongámonos en contacto!</h1>
                        <div className="lg:px-25">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className="space-y-4 max-w-sm"
                            >
                                <FloatingField
                                    label="Nombre"
                                    id="name"
                                    {...register("nombre", { required: true })}
                                />

                                <FloatingField
                                    label="Apellido"
                                    id="lastname"
                                    {...register("apellido", { required: true })}
                                />

                                <PhoneField />

                                <ButtonPrincipal
                                    texto="Enviar"
                                    type="submit"
                                    widthFull
                                />
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Contact;