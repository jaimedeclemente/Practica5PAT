package com.jaimedeclemente.Contacts;

import java.io.Serializable;

public class Contact implements Serializable {
    private String nombre;
    private String apellidos;
    private String mail;
    private String direccion;
    private String ciudad;
    private String provincia;
    private int cp;

    public Contact(String nombre, String apellidos, String mail, String direccion, String ciudad, String provincia,
            int cp) {
        this.setNombre(nombre);
        this.setApellidos(apellidos);
        this.setMail(mail);
        this.setDireccion(direccion);
        this.setCiudad(ciudad);
        this.setProvincia(provincia);
        this.setCp(cp);
    }

    public String getNombre(){
        return nombre;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public String getApellidos(){
        return apellidos;
    }

    public void setApellidos(String apellidos){
        this.apellidos = apellidos;
    }

    public String getMail(){
        return mail;
    }

    public void setMail(String mail){
        this.mail = mail;
    }

    public String getDireccion(){
        return direccion;
    }

    public void setDireccion(String direccion){
        this.direccion = direccion;
    }

    public String getCiudad(){
        return ciudad;
    }

    public void setCiudad(String ciudad){
        this.ciudad = ciudad;
    }

    public String getProvincia(){
        return provincia;
    }

    public void setProvincia(String provincia){
        this.provincia = provincia;
    }

    public int getCp(){
        return cp;
    }

    public void setCp(int cp){
        this.cp = cp;
    }
}