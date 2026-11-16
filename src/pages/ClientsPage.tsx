import { useEffect, useState } from 'react';
import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import { create, trash } from 'ionicons/icons';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
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
      <NavBar title="Clientes" />
      <IonContent className="ion-padding">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>
                  <IonButton fill="clear" onClick={() => navigate(`/clients/edit/${c.id}`)}>
                    <IonIcon icon={create} />
                  </IonButton>
                  <IonButton fill="clear" color="danger" onClick={() => handleDelete(c.id!)}>
                    <IonIcon icon={trash} />
                  </IonButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </IonContent>
    </IonPage>
  );
};

export default ClientsPage;
