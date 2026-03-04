import { useState } from 'react';
import StatsCard from '../components/StatsCard';
import ChartJsShowcase from '../components/ChartJsShowcase';
import UserCard from '../components/UserCard';
import AlertCenter from '../components/AlertCenter';
import Badge from '../components/Badge';
import FeatureCard from '../components/FeatureCard';
import Avatar from '../components/Avatar';
import AppButton from '../components/AppButton';
import Progress from '../components/Progress';
import Rating from '../components/Rating';
import InputField from '../components/InputField';
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';
import StatBadge from '../components/StatBadge';
import './ComponentLibrary.css';

const components = [
  { id: 'stats', label: 'Stats Cards', icon: '📊', description: 'Tarjetas de métricas con indicadores visuales de tendencia.' },
  { id: 'charts', label: 'Gráficos', icon: '📈', description: 'Componentes para visualizar datos.' },
  { id: 'users', label: 'Perfiles de Usuario', icon: '👤', description: 'Tarjetas de perfil con información de usuarios.' },
  { id: 'alerts', label: 'Alertas', icon: '🔔', description: 'Mensajes de notificación con niveles de severidad.' },
  { id: 'badges', label: 'Etiquetas', icon: '🏷️', description: 'Indicadores de estado compactos.' },
  { id: 'features', label: 'Tarjetas de Características', icon: '✨', description: 'Presenta características y beneficios.' },
  { id: 'avatars', label: 'Avatares', icon: '🧑', description: 'Representación visual de usuarios.' },
  { id: 'buttons', label: 'Botones', icon: '🖱️', description: 'Elementos interactivos primarios.' },
  { id: 'progress', label: 'Barras de Progreso', icon: '🏃', description: 'Visualiza completitud de procesos.' },
  { id: 'ratings', label: 'Calificaciones', icon: '⭐', description: 'Componente para mostrar y gestionar ratings.' },
  { id: 'inputs', label: 'Campos de Entrada', icon: '✏️', description: 'Inputs flexibles con variantes.' },
  { id: 'tables', label: 'Tabla de Datos', icon: '📋', description: 'Tabla sorteable y responsive.' },
  { id: 'pagination', label: 'Paginación', icon: '🔢', description: 'Controles de navegación entre páginas.' },
  { id: 'stat-badges', label: 'Badges Estadísticos', icon: 'ℹ️', description: 'Mini tarjetas con número + contexto.' },
];

const statsCardVariants = [
  { title: 'Total Sales', value: '12,456', changePercent: 15, isPositive: true, icon: 'shopping_cart', variant: 'primary' as const },
  { title: 'Revenue', value: '$45,321', changePercent: 8, isPositive: true, icon: 'attach_money', variant: 'success' as const },
  { title: 'Active Users', value: '2,345', changePercent: 5, isPositive: false, icon: 'people', variant: 'warning' as const },
  { title: 'Alerts', value: '12', changePercent: 22, isPositive: false, icon: 'warning', variant: 'danger' as const },
];

const userVariants = [
  { name: 'Sarah Anderson', role: 'UX/UI Designer', bio: 'Creating beautiful and intuitive interfaces for modern web.', followers: 2345, following: 678, posts: 125, avatarColor: '#667eea' },
  { name: 'Mike Johnson', role: 'Full Stack Developer', bio: 'Building scalable applications with cutting-edge technologies.', followers: 1890, following: 456, posts: 98, avatarColor: '#f093fb' },
  { name: 'Emma Wilson', role: 'Product Manager', bio: 'Passionate about creating products that users love.', followers: 3200, following: 890, posts: 156, avatarColor: '#4facfe' },
];

const badgeVariants = [
  { label: 'Active', variant: 'success' as const, icon: 'check_circle' },
  { label: 'Pending', variant: 'warning' as const, icon: 'schedule' },
  { label: 'Inactive', variant: 'danger' as const, icon: 'block' },
  { label: 'New', variant: 'primary' as const, icon: 'new_releases' },
  { label: 'Premium', variant: 'secondary' as const, icon: 'star' },
];

const featureVariants = [
  {
    icon: 'lightning_bolt', iconColor: '#f093fb', title: 'Lightning Fast',
    description: 'Built for performance with optimized rendering and minimal bundle size.',
    meta: [{ icon: 'speed', label: '< 100ms load' }, { icon: 'storage', label: '50KB gzip' }]
  },
  {
    icon: 'shield', iconColor: '#667eea', title: 'Secure by Default',
    description: 'Enterprise-grade security features to protect your data.',
    meta: [{ icon: 'verified', label: 'SSL/TLS' }, { icon: 'vpn_lock', label: 'End-to-End Encrypted' }]
  },
  {
    icon: 'palette', iconColor: '#4facfe', title: 'Fully Customizable',
    description: 'Easily customize colors, layouts, and components to match your brand.',
    meta: [{ icon: 'design_services', label: 'Theme Builder' }, { icon: 'code', label: 'Component API' }]
  },
];

const avatarVariants = [
  { initials: 'SA', color: '#667eea' },
  { initials: 'MJ', color: '#f093fb' },
  { initials: 'EW', color: '#4facfe' },
  { icon: 'account_circle', color: '#d97706' },
];

const buttonVariants = [
  { label: 'Primary', variant: 'primary' as const },
  { label: 'Secondary', variant: 'secondary' as const },
  { label: 'Success', variant: 'success' as const },
  { label: 'Danger', variant: 'danger' as const },
  { label: 'Outline', variant: 'outline' as const },
  { label: 'Ghost', variant: 'ghost' as const },
];

const progressVariants = [
  { percentage: 25, variant: 'primary' as const, label: 'Primary' },
  { percentage: 50, variant: 'success' as const, label: 'Success' },
  { percentage: 75, variant: 'warning' as const, label: 'Warning' },
  { percentage: 85, variant: 'danger' as const, label: 'Danger' },
  { percentage: 100, variant: 'info' as const, label: 'Completed' },
];

const ratingVariants = [
  { rating: 5, reviewCount: 234 },
  { rating: 4, reviewCount: 156 },
  { rating: 3, reviewCount: 89 },
  { rating: 2, reviewCount: 34 },
];

const tableColumns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: false },
  { key: 'date', label: 'Joined', sortable: true },
];

const tableData = [
  { name: 'Sarah Anderson', role: 'Designer', status: 'Active', date: '2024-01-15' },
  { name: 'Mike Johnson', role: 'Developer', status: 'Active', date: '2024-02-20' },
  { name: 'Emma Wilson', role: 'Manager', status: 'Inactive', date: '2023-12-10' },
  { name: 'John Smith', role: 'Analyst', status: 'Active', date: '2024-03-05' },
  { name: 'Lisa Brown', role: 'Developer', status: 'Active', date: '2024-01-25' },
];

const statBadgeVariants = [
  { label: 'Revenue', number: '$45.2K', subtitle: 'Last 30 days', icon: 'trending_up', variant: 'success' as const },
  { label: 'Users', number: '2,345', subtitle: 'Active users', icon: 'people', variant: 'primary' as const },
  { label: 'Growth', number: '+18%', subtitle: 'Month over month', icon: 'trending_up', variant: 'warning' as const },
  { label: 'Issues', number: '12', subtitle: 'To resolve', icon: 'warning', variant: 'danger' as const },
];

const alertUsage = `// Usar useAlerts() hook
import { useAlerts } from '../services/alertService';

function MyComponent() {
  const { show } = useAlerts();
  
  // mostrar alerta
  show({ title: 'Hecho', message: 'Guardado', severity: 'success', timeout: 4000 });
}`;

const inputUsage = `// Ejemplos de uso de InputField
<InputField label="Search" type="search" placeholder="Buscar..." prefixIcon="search" />

<InputField label="Password" type="password" placeholder="Password" prefixIcon="lock" />

<InputField label="Comments" type="textarea" rows={6} placeholder="Escribe tu comentario..." />

<InputField label="Quantity" type="number" placeholder="0" />`;

type FormState = {
  username: string;
  email: string;
  password: string;
  comments: string;
  quantity: string;
};

type FormErrors = Partial<FormState>;

export default function ComponentLibrary() {
  const [selectedComponent, setSelectedComponent] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [form, setForm] = useState<FormState>({ username: '', email: '', password: '', comments: '', quantity: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formTouched, setFormTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const validate = (f: FormState): FormErrors => {
    const e: FormErrors = {};
    if (!f.username || f.username.length < 3) e.username = 'Mínimo 3 caracteres.';
    if (!f.email || !/\S+@\S+\.\S+/.test(f.email)) e.email = 'Email inválido.';
    if (!f.password || f.password.length < 6) e.password = 'Mínimo 6 caracteres.';
    if (f.quantity && Number(f.quantity) < 0) e.quantity = 'Mínimo valor: 0.';
    return e;
  };

  const handleFormChange = (field: keyof FormState, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (formTouched[field]) {
      setFormErrors(validate(updated));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const all = { username: true, email: true, password: true, comments: true, quantity: true };
    setFormTouched(all);
    const errors = validate(form);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert('Formulario válido — revisar consola');
      console.log('Demo form value', form);
    }
  };

  const isVisible = (id: string) => selectedComponent === 'all' || selectedComponent === id;

  const selectComponent = (id: string) => {
    setSelectedComponent(id);
    setSidebarOpen(false);
  };

  return (
    <div className="component-library">
      {/* Mobile hamburger */}
      <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`components-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-section-header">
          <span className="section-title">📦 Componentes</span>
        </div>
        <nav className="components-nav">
          <button
            className={`component-nav-link ${selectedComponent === 'all' ? 'active' : ''}`}
            onClick={() => selectComponent('all')}
          >
            <span>🏠</span>
            <span>Todos</span>
          </button>
          {components.map(comp => (
            <button
              key={comp.id}
              className={`component-nav-link ${selectedComponent === comp.id ? 'active' : ''}`}
              onClick={() => selectComponent(comp.id)}
              title={comp.description}
            >
              <span>{comp.icon}</span>
              <span>{comp.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="library-content">
        <div className="library-header">
          <h1>📚 HistoryBook</h1>
          <p>Guía de componentes con mejores prácticas UX para desarrolladores</p>
        </div>

        {/* Stats Cards */}
        {isVisible('stats') && (
          <section className="section">
            <div className="section-header">
              <h2>📊 Tarjetas Estadísticas</h2>
              <p>Métricas clave con indicadores de tendencia. Usa en dashboards ejecutivos para KPIs.</p>
            </div>
            <div className="components-grid">
              {statsCardVariants.map((v, i) => (
                <StatsCard key={i} {...v} />
              ))}
            </div>
          </section>
        )}

        {/* Charts */}
        {isVisible('charts') && (
          <section className="section">
            <div className="section-header">
              <h2>📈 Gráficos</h2>
              <p>Visualización de datos con gráficos interactivos. Ideal para análisis y tendencias.</p>
            </div>
            <ChartJsShowcase />
          </section>
        )}

        {/* User Cards */}
        {isVisible('users') && (
          <section className="section">
            <div className="section-header">
              <h2>👤 Perfiles de Usuario</h2>
              <p>Tarjetas de perfil con información social. Perfectas para directorios o equipos.</p>
            </div>
            <div className="components-grid users-grid">
              {userVariants.map((v, i) => (
                <UserCard key={i} {...v} />
              ))}
            </div>
          </section>
        )}

        {/* Alerts */}
        {isVisible('alerts') && (
          <section className="section">
            <div className="section-header">
              <h2>🔔 Alertas</h2>
              <p>Notificaciones contextuales con niveles de severidad.</p>
            </div>
            <div className="alerts-container">
              <div className="alerts-demo">
                <AlertCenter />
              </div>
              <aside className="usage-panel">
                <h3>Cómo usar useAlerts()</h3>
                <pre className="code-block"><code>{alertUsage}</code></pre>
                <p>El hook useAlerts() es accesible en cualquier componente dentro del AlertContext.</p>
              </aside>
            </div>
          </section>
        )}

        {/* Badges */}
        {isVisible('badges') && (
          <section className="section">
            <div className="section-header">
              <h2>🌠 Etiquetas</h2>
              <p>Indicadores compactos de estado y categorías.</p>
            </div>
            <div className="badges-container">
              {(['small', 'medium', 'large'] as const).map(size => (
                <div key={size} className="badge-size-group">
                  <h4>{size === 'small' ? 'Small' : size === 'medium' ? 'Medium (Default)' : 'Large'}</h4>
                  <div className="badge-group">
                    {badgeVariants.map((v, i) => (
                      <Badge key={i} {...v} size={size} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Feature Cards */}
        {isVisible('features') && (
          <section className="section">
            <div className="section-header">
              <h2>✨ Tarjetas de Características</h2>
              <p>Resalta beneficios y servicios con diseño impactante.</p>
            </div>
            <div className="features-subsection">
              <h3>Vertical Layout</h3>
              <div className="components-grid">
                {featureVariants.map((v, i) => (
                  <FeatureCard key={i} {...v} layout="vertical" />
                ))}
              </div>
            </div>
            <div className="features-subsection">
              <h3>Horizontal Layout</h3>
              <div className="horizontal-grid">
                {featureVariants.map((v, i) => (
                  <FeatureCard key={i} {...v} layout="horizontal" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Avatars */}
        {isVisible('avatars') && (
          <section className="section">
            <div className="section-header">
              <h2>🧑 Avatares</h2>
              <p>Representación visual de usuarios con soporte para imágenes, iniciales e iconos.</p>
            </div>
            {(['small', 'medium', 'large', 'xlarge'] as const).map(size => (
              <div key={size} className="avatars-subsection">
                <h4>{size === 'small' ? 'Small (32px)' : size === 'medium' ? 'Medium (48px)' : size === 'large' ? 'Large (64px)' : 'Extra Large (96px)'}</h4>
                <div className="avatars-group">
                  {avatarVariants.map((v, i) => (
                    <Avatar key={i} size={size} initials={v.initials} icon={v.icon} backgroundColor={v.color} />
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Buttons */}
        {isVisible('buttons') && (
          <section className="section">
            <div className="section-header">
              <h2>💫 Botones</h2>
              <p>Elementos primarios de acción con jerarquía visual clara.</p>
            </div>
            {(['small', 'medium', 'large'] as const).map(size => (
              <div key={size} className="buttons-subsection">
                <h4>{size === 'small' ? 'Small' : size === 'medium' ? 'Medium (Default)' : 'Large'}</h4>
                <div className="buttons-group">
                  {buttonVariants.map((v, i) => (
                    <AppButton key={i} {...v} size={size} />
                  ))}
                </div>
              </div>
            ))}
            <div className="buttons-subsection">
              <h4>With Icons</h4>
              <div className="buttons-group">
                <AppButton label="Save" variant="success" icon="save" />
                <AppButton label="Delete" variant="danger" icon="delete" />
                <AppButton label="Edit" variant="primary" icon="edit" />
                <AppButton label="Download" variant="secondary" icon="download" />
              </div>
            </div>
          </section>
        )}

        {/* Progress */}
        {isVisible('progress') && (
          <section className="section">
            <div className="section-header">
              <h2>🏃 Barras de Progreso</h2>
              <p>Visualiza completitud de procesos, descargas o cargas.</p>
            </div>
            <div className="progress-group">
              {progressVariants.map((v, i) => (
                <div key={i} className="progress-item">
                  <Progress percentage={v.percentage} variant={v.variant} label={v.label} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ratings */}
        {isVisible('ratings') && (
          <section className="section">
            <div className="section-header">
              <h2>⭐ Calificaciones</h2>
              <p>Muestra calificaciones con estrellas y cantidad de reseñas.</p>
            </div>
            <div className="ratings-group">
              {ratingVariants.map((v, i) => (
                <Rating key={i} {...v} />
              ))}
            </div>
          </section>
        )}

        {/* Input Fields */}
        {isVisible('inputs') && (
          <section className="section">
            <div className="section-header">
              <h2>✏️ Campos de Entrada</h2>
              <p>Inputs flexibles con validación y soporte de iconos.</p>
            </div>
            <div className="chart-showcase-layout inputs-showcase-layout">
              <div className="chart-area">
                <div className="inputs-grid">
                  <InputField label="Username" placeholder="Enter your username" variant="primary" prefixIcon="account_circle" />
                  <InputField label="Email" placeholder="Enter your email" variant="success" prefixIcon="mail" />
                  <InputField label="Password" placeholder="Enter your password" type="password" variant="warning" prefixIcon="lock" />
                  <InputField label="Search" placeholder="Search..." type="search" variant="primary" prefixIcon="search" />
                  <InputField label="Comments" type="textarea" placeholder="Write a comment..." rows={4} />
                  <InputField label="Quantity" type="number" placeholder="0" />
                </div>

                <div className="reactive-form-demo">
                  <h4>Demo: Formulario Reactivo Moderno</h4>
                  <form onSubmit={handleSubmit} className="demo-form">
                    <div className="form-row">
                      <div className="form-col">
                        <InputField
                          label="Username"
                          placeholder="Ej: juanperez"
                          prefixIcon="account_circle"
                          value={form.username}
                          onChange={v => handleFormChange('username', v)}
                          error={formTouched.username ? formErrors.username : ''}
                        />
                      </div>
                      <div className="form-col">
                        <InputField
                          label="Email"
                          placeholder="Ej: juan@email.com"
                          prefixIcon="mail"
                          value={form.email}
                          onChange={v => handleFormChange('email', v)}
                          error={formTouched.email ? formErrors.email : ''}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-col">
                        <InputField
                          label="Password"
                          placeholder="Min. 6 caracteres"
                          type="password"
                          prefixIcon="lock"
                          value={form.password}
                          onChange={v => handleFormChange('password', v)}
                          error={formTouched.password ? formErrors.password : ''}
                        />
                      </div>
                      <div className="form-col">
                        <InputField
                          label="Cantidad"
                          placeholder="0"
                          type="number"
                          value={form.quantity}
                          onChange={v => handleFormChange('quantity', v)}
                          error={formTouched.quantity ? formErrors.quantity : ''}
                        />
                      </div>
                    </div>
                    <div className="form-row full-width">
                      <InputField
                        label="Comentarios"
                        placeholder="Escribe tus comentarios aquí..."
                        type="textarea"
                        rows={3}
                        value={form.comments}
                        onChange={v => handleFormChange('comments', v)}
                      />
                    </div>
                    <div className="form-actions">
                      <button type="submit" className="btn-submit">✓ Enviar formulario</button>
                      <button type="button" className="btn-reset" onClick={() => { setForm({ username: '', email: '', password: '', comments: '', quantity: '' }); setFormTouched({}); setFormErrors({}); }}>
                        ↻ Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <aside className="usage-panel">
                <h3>Cómo usar Inputs</h3>
                <p>El componente acepta las variantes comunes: text, password, textarea, search, number.</p>
                <pre className="code-block"><code>{inputUsage}</code></pre>
                <h4>Props principales</h4>
                <ul>
                  <li><strong>type</strong>: text | password | textarea | search | number</li>
                  <li><strong>prefixIcon</strong>: nombre del icono</li>
                  <li><strong>rows</strong>: para textarea</li>
                  <li><strong>variant</strong>: primary | success | warning | danger</li>
                </ul>
              </aside>
            </div>
          </section>
        )}

        {/* Data Table */}
        {isVisible('tables') && (
          <section className="section">
            <div className="section-header">
              <h2>📋 Tabla de Datos</h2>
              <p>Tabla responsive con ordenamiento y filas claras.</p>
            </div>
            <DataTable columns={tableColumns} rows={tableData} />
          </section>
        )}

        {/* Pagination */}
        {isVisible('pagination') && (
          <section className="section">
            <div className="section-header">
              <h2>🔢 Paginación</h2>
              <p>Controles de navegación entre páginas.</p>
            </div>
            <div className="pagination-container">
              <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
              <p>Current Page: {currentPage}</p>
            </div>
          </section>
        )}

        {/* Stat Badges */}
        {isVisible('stat-badges') && (
          <section className="section">
            <div className="section-header">
              <h2>🎯 Badges Estadísticos</h2>
              <p>Mini tarjetas con números y contexto. Perfectas para dashboards compactos.</p>
            </div>
            <div className="stat-badges-grid">
              {statBadgeVariants.map((v, i) => (
                <StatBadge key={i} {...v} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
