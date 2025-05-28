import { ClassEntity } from "./entities/classEntity";

const API_ENDPOINT = "https://dlc.dwit.edu.np";

export default class ClassService {
  async fetchClasses(): Promise<ClassEntity[]> {
    const response = await fetch(`${API_ENDPOINT}/api/grades`);
    const { data } = await response.json();
    return data as ClassEntity[];
  }
}
