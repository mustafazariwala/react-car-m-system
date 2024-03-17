import Car from '../../../\(models\)/Car';
import { NextResponse } from 'next/server';

export async function GET(req, {params}) {
  try {
    const { id } = params;
    const findCar = await Car.findOne({
      _id: id
    });

    return NextResponse.json(findCar, {
      status: 200
    
    })
  } catch (err) {
    return NextResponse.json({
      message: "Error",
      err
    }, {
      status: 500
    })
  }
};

export async function PUT(req, {params}) {
  try {
    const { id } = params;
    const body = await req.json();
    const findCar = await Car.findByIdAndUpdate(id, body.formData);

    return NextResponse.json({message: 'Ticket Updated'}, {
      status: 200
    
    })
  } catch (err) {
    return NextResponse.json({
      message: "Error",
      err
    }, {
      status: 500
    })
  }
};

export async function DELETE(req, {params}) {
  try {
    const { id } = params;
    await Car.findByIdAndDelete(id);
    return NextResponse.json({
      message: "Ticket Deleted"
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