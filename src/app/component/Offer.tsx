import { Clock, Download, Globe, Shield, Sparkles } from 'lucide-react'

interface CardProps {
  icon: React.ElementType;
  description: string;
  heading: string;
}
export const Card = ({ icon: Icon, heading, description }: CardProps) => {
  return (
    <div className="group p-5 border border-white/10 rounded-2xl bg-white/10 backdrop-blur-2xl cursor-pointer text-white hover:bg-white/15 transition-all duration-300 text-left">

      <div className=" w-16 h-16  transition-transform duration-300 group-hover:scale-110">
        <Icon className="bg-orange-600 text-white w-14 h-14 p-3 rounded-2xl" />
      </div>

      <h1 className="text-xl font-semibold py-5">{heading}</h1>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
  );
};



const Offer: React.FC = () => {
  interface Service {
    icon: React.ElementType,
    description: string,
    heading: string
  }
  const services: Service[] = [
    {
      icon: Sparkles,
      heading: 'AI Script Generation',
      description: 'Generate engaging podcast scripts instantly with advanced AI technology'
    },
    {
      icon: Clock,
      heading: 'Instant Production',
      description: 'Create professional podcasts in minutes, not hours'
    },
    {
      icon: Globe,
      heading: 'Multi-Language Support',
      description: 'Generate content in multiple languages and accents'
    },
    {
      icon: Download,
      heading: 'Export Ready',
      description: 'Download in multiple formats ready for any platform'
    },
    {
      icon: Shield,
      heading: 'Enterprize Security',
      description: 'Your content is secure with enterprise-grade encryption'
    },
   
  ];


  return (
    <section id='features' className=' mt-30 scroll-mt-24'>
      <div  className='leadinf-tight '>
        <h1 className='mt-5 text-2xl md:text-5xl lg:text-5xl  font-bold text-center leading-tight'>Everything You Need to Create <span className="text-orange-500">Professional Podcasts</span></h1>
        <p className='text-center text-xl text-gray-400 mt-3 text-balance'>Our AI-powered platform provides all the tools you need to create, edit, and distribute amazing podcast content.</p>
      </div>
      <div className=" mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {services.map((service, index) => (
          <Card key={index} icon={service.icon} heading={service.heading} description={service.description} />
        ))
        }
      </div>

    </section>
  )
}

export default Offer

