import { useEffect, useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonPage,
} from '@ionic/react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Client } from '../interfaces/Client';
import { ClientsService } from '../services/ClientsService';

const EditClientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [client, setClient] = useState<Client>({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    ClientsService.getById(Number(id)).then(setClient).catch(console.error);
  }, [id]);

  const handleSave = async () => {
    const { name, email, phone } = client;
    await ClientsService.update(Number(id), { name, email, phone });
    navigate('/clients');
  };

  return (
    <IonPage>
      <NavBar title="Editar cliente" />
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
          Actualizar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditClientPage;
