import $api from '@/http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '@/models/response/AuthResponse';

export default class AuthService {
  static async login(email: String, password: String): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password });
  }

  static async registration(
    username: string,
    email: String,
    password: String,
    repeatPassword: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', { username, email, password, repeatPassword });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }

  static async sendActivationCode(): Promise<AxiosResponse> {
    return $api.post('/activation-code');
  }
}
