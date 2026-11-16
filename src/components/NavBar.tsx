import { IonButton, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/clients', label: 'Ver clientes' },
  { to: '/clients/new', label: 'Añadir clientes' },
  { to: '/about', label: 'About' },
];

const NavBar: React.FC<{ title: string }> = ({ title }) => (
  <IonHeader>
    <IonToolbar>
      <IonTitle>{title}</IonTitle>
      <IonButtons slot="end">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end style={{ textDecoration: 'none' }}>
            {({ isActive }) => <IonButton fill={isActive ? 'solid' : 'clear'}>{l.label}</IonButton>}
          </NavLink>
        ))}
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default NavBar;
