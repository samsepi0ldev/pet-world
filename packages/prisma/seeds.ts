import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main () {
  await prisma.schedule.deleteMany()
  await prisma.schedule.createMany({
    data: [
      {
        client_name: 'Fernanda Costa',
        pet_name: 'Thor',
        description_service: 'Vacinação',
        phone_number: '(00) 00000-0000',
        hours: 1724749200,
        service_to: new Date(),
      },
      {
        client_name: 'João Souza',
        pet_name: 'Mel',
        description_service: 'Corte de Unhas',
        phone_number: '(00) 00000-0000',
        hours: 1724763600,
        service_to: new Date(),
      },
      {
        client_name: 'Pedro Martins',
        pet_name: 'Bella',
        description_service: 'Aplicação de Anti-pulgas',
        phone_number: '(00) 00000-0000',
        hours: 1724767200,
        service_to: new Date(),
      },
      {
        client_name: 'Juliana Rocha',
        pet_name: 'Simba',
        description_service: 'Tosa Higiênica',
        phone_number: '(00) 00000-0000',
        hours: 1724770800,
        service_to: new Date(),
      },
      {
        client_name: 'Camila Santos',
        pet_name: 'Max',
        description_service: 'Limpeza de Dentes',
        phone_number: '(00) 00000-0000',
        hours: 1724788800,
        service_to: new Date(),
      },
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
