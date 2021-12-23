import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from "App/Models/Employee";


export default class EmployeeController {
    public async index () {
        return Employee.all()
    }

    public async store ({ request}: HttpContextContract) {
        
        return await Employee.create(request.body())
    }

    public async show ({ params } : HttpContextContract) {
        return Employee.findOrFail(params.id)
    }

    public async update({ params, request}: HttpContextContract) {
        const employee = await Employee.findOrFail(params.id)
        const {name, email} = request.body()

        employee.name = name
        employee.email = email
        
        return employee.save()
    }

    public async destroy ({ params }: HttpContextContract) {
        const employee = await Employee.findOrFail(params.id) 
        return employee.delete()
    }
}
