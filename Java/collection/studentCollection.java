import java.util.*;

public class studentCollection {
    public static void main(String[] args) {
        List<Students> student = new ArrayList<>();
        student.add(new Students(111,"Aniket"));
        student.add(new Students(444,"Zparth"));
        student.add(new Students(333,"Vedant"));
        student.add(new Students(222,"Tejas"));
        student.add(new Students(555,"Shubham"));

        System.out.println("student Data");
        System.out.println(student);

        System.out.println("Using Foreach");

        student.forEach(std -> {
            System.out.println(std.rollno + ":" + std.name);
        });

        student.sort((o1, o2) -> o1.name.compareTo(o2.name));
        // Collections.sort(student);

        System.out.println(student);
    }
}

class Students {
    int rollno;
    String name;
    // Stirng address;

    public Students(int rollno,String name){
        this.rollno = rollno;
        this.name = name;
    }

    public String toString(){ // it use to make hash code to raw 
        return "{" + "rollno=" + rollno +", name = " + name + '\'' + "}";
    }
    
}

