@extends('layouts.default')

@section('content')
<h1>Log in</h1>

@include('partials.errorsForm')

{!! Form::open() !!}
<div class="form-group">
    {!! Form::label('email','Email:') !!}
    {!! Form::email('email',null,['class' => 'form-control']) !!}
</div>

<div class="form-group">
    {!! Form::label('password','Password:') !!}
    {!! Form::password('password',['class' => 'form-control']) !!}
</div>

<div class="form-group">
    {!! Form::submit('Log in',['class' => 'btn btn-primary']) !!}
</div>
{!! Form::close() !!}
@stop