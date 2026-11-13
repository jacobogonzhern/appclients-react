import { useEffect, useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { add, create, trash } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import { Client } from '../interfaces/Client';
import { ClientsService } from '../services/ClientsService';

const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const navigate = useNavigate();

  const load = async () => {
    try {
      setClients(await ClientsService.getAll());
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id: number) => {
    await ClientsService.remove(id);
    load();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clientes</IonTitle>
          <IonButton slot="end" fill="clear" onClick={() => navigate('/clients/new')}>
            <IonIcon icon={add} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {clients.map((c) => (
            <IonItem key={c.id}>
              <IonLabel>
                <h2>{c.name}</h2>
                <p>{c.email}</p>
              </IonLabel>
              <IonButton fill="clear" onClick={() => navigate(`/clients/edit/${c.id}`)}>
                <IonIcon icon={create} />
              </IonButton>
              <IonButton fill="clear" color="danger" onClick={() => handleDelete(c.id!)}>
                <IonIcon icon={trash} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ClientsPage;
