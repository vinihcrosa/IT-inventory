import { createConnections } from 'typeorm'

createConnections().then(() => console.log("🎲 Conectado com sucesso"));