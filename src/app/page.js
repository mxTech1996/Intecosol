'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  Hero,
  FeaturesV2,
  Features,
} from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  console.log(dataSite);
  return (
    <main
      style={{
        backgroundColor: '#C9EBF8FF',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero
          variant='background-video'
          src={'/images/intecosol.mp4'}
          colorText='#fff'
          title={'Train to Master Local and Long-Distance'}
          description={dataSite.description}
          srcSecondary={dataSite.image_hero2}
          withSubView
          images={[dataSite.image_hero, dataSite.image_hero2]}
          styleTextSecondSection={{
            color: 'black',
          }}
          withShadowText
        />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div className='flex flex-col' id='our-services'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Our Services
          </Typography.Title>
          <Features
            variant='background-img'
            textColor='white'
            features={dataSite.services}
            borderRadius={12}
            brightness={4}
          />
        </div>
        <div className='flex flex-col px-64' id='know-us'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Know Us
          </Typography.Title>
          <Missions
            backgroundColor={'#ABCDDAFF'}
            data={dataSite.info}
            gridColumns={1}
            variant='card'
            textColor={'#3E1911FF'}
          />
        </div>

        <div id='courses'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={false}
              title='All Courses'
              gridColumns={2}
              variant='grid'
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='1'
              carouselOptions={{
                arrowColor: 'black',
                fade: true,
                autoPlay: false,
                direction: 'horizontal',
              }}
              backgroundItemColor='#FBFBFB'
              stylesItem={{
                borderRadius: 12,
              }}
            />
          )}
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='card'
            variant='carousel'
            backgroundColor='#9FE2F4FF'
            references={dataSite.references}
            gridColumns={1}
            titleAlign='center'
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
