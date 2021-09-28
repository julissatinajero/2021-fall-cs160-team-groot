package com.cs160groot.FoodFinder.Entity;

import java.util.ArrayList;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "recipes")
public class Recipe {
    @Id
    private String _id;

    // Recipe Identification
    private String title;
    private String author;
    private String date;

    // Recipe Content
    ArrayList<String> ingredients;
    ArrayList<String> instructions;

    public Recipe(){}

    public Recipe(String tit, String at, String date, ArrayList<String> igs, ArrayList<String> inst){
        this.title = tit;
        this.author = at;
        this.date = date;
        this.ingredients = igs;
        this.instructions = inst;
    }

    public String getTitle(){
        return this.title;
    }

    public String getAuthor(){
        return this.author;
    }

    public String getDate(){
        return this.date;
    }

    public ArrayList<String> getInstructions(){
        return this.instructions;
    }

    public ArrayList<String> getIngredients(){
        return this.ingredients;
    }

    @Override
    public String toString() {
        return String.format("Customer[id=%s, title='%s', author='%s', date='%s']",
            _id, title, author, date);
  }
}
