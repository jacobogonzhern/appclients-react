import { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonPage,
} from '@ionic/react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Client } from '../interfaces/Client';
import { ClientsService } from '../services/ClientsService';

const NewClientPage: React.FC = () => {
  const [client, setClient] = useState<Client>({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleSave = async () => {
    await ClientsService.create(client);
    navigate('/clients');
  };

  return (
    <IonPage>
      <NavBar title="Añadir cliente" />
      <IonContent className="ion-padding">
        <IonInput
          label="Nombre"
          labelPlacement="floating"
          value={client.name}
          onIonInput={(e) => setClient({ ...client, name: e.detail.value ?? '' })}
        />
        <IonInput
          label="Email"
          labelPlacement="floating"
          type="email"
          value={client.email}
          onIonInput={(e) => setClient({ ...client, email: e.detail.value ?? '' })}
        />
        <IonInput
          label="Teléfono"
          labelPlacement="floating"
          value={client.phone}
          onIonInput={(e) => setClient({ ...client, phone: e.detail.value ?? '' })}
        />
        <IonButton expand="block" className="ion-margin-top" onClick={handleSave}>
          Guardar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default NewClientPage;
