import Car from "../../(models)/Car";
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const carData = body.formData;
    await Car.create(carData);
    return NextResponse.json({
      message: "Car created successfully"
    }, {
      status: 201
    })
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      message: "Error",
      err
    }, {
      status: 500
    })
  }
}

export async function GET(req) {
  try {
    const cars = await Car.find();
    return NextResponse.json({
      cars
    }, {
      status: 200
    })
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      message: "Error",
      err
    }, {
      status: 500
    })
  }
}