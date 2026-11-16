import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../components/NavBar';

const AboutPage: React.FC = () => (
  <IonPage>
    <NavBar title="About" />
    <IonContent className="ion-padding">
      <h1>AppClients</h1>
      <p>
        AppClients es una aplicación desarrollada con React, Ionic y TypeScript que permite gestionar
        clientes. Los datos se almacenan en una base de datos PostgreSQL de Supabase y la aplicación
        está desplegada en Vercel. Permite consultar los clientes en una tabla y añadir nuevos
        clientes mediante un formulario.
      </p>
      <img
        src="/about.webp"
        alt="Imagen del proyecto"
        style={{ maxWidth: '100%', borderRadius: 8, marginBottom: 16 }}
      />
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/SqcY0GlETPk"
          title="Vídeo de YouTube"
          allowFullScreen
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
        />
      </div>
    </IonContent>
  </IonPage>
);

export default AboutPage;
