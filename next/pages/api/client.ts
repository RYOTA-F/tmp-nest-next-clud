import axios from 'axios'
import aspida from '@aspida/axios'
/* api */
import api from '../../api/$api'
/* constants */
import { API_BASE_URL } from '@constants/api'

const apiClient = api(aspida(axios, { baseURL: API_BASE_URL }))

export default apiClient
