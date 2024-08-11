import { render, screen } from '@testing-library/react';
import ProjectList from '../components/ProjectList';

test('renders a <ProjectItem> for each project passed in as a prop', () => {
  const projects = [
    { id: 1, name: 'Reciplease', about: 'A recipe tracking app', technologies: ['Rails', 'Bootstrap CSS'] },
    { id: 2, name: 'Kibbles N Bitz', about: 'Tinder for dogs', technologies: ['React', 'Redux'] },
    { id: 3, name: 'Alienwares', about: 'Etsy for aliens', technologies: ['React', 'Redux', 'Rails'] },
  ];

  render(<ProjectList projects={projects} />);

  for (const project of projects) {
    expect(screen.queryByText(project.name)).toBeInTheDocument();
  }
});
