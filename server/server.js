const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const User = require('./models/user')
const Employee = require('./models/employee')
const Applicable = require('./models/applicablewages')
const Projected = require('./models/projected');
const Staying = require('./models/probablilitystaying');
const Probability = require('./models/probabilities');
const Employermpf = require('./models/employermpf');
const LongPayment = require('./models/longspayment');
const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

mongoose.connect("mongodb+srv://diti2001:diti2001@cluster0.xbnr7h0.mongodb.net/LSOP?retryWrites=true&w=majority")

app.post('/register' , (req, res) => {
    const { name , email , password} = req.body
        User.create({ name , email , password})
        .then(user => res.json({status : "OK"}))
        .catch(err => res.json(err))
})



app.post('/login', async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'asdsad1qwe1dsad1dasdqd1qdqdq', {
        expiresIn: '1h',
      });
  
      res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  


app.post('/employee-information' , (req, res) => {
    const { staffNr,gender, averageIncome, dateOfJoin, dateOfBirth, averageMI, employeeBonus } = req.body;
    console.log(req.body); 
    Employee.create({ staffNr,gender, averageIncome, dateOfJoin, dateOfBirth, averageMI, employeeBonus })
        .then(employee => res.json({ status: "OK" }))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        });
})

app.get('/employee-information', async (req, res) => {
    try {
      const data = await Employee.find(); 
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

app.delete('/employee-information/:staffNr', async (req, res) => {
    const staffNr = req.params.staffNr;
  
    try {
      const deletedEmployee = await Employee.findOneAndDelete({ staffNr });
  
      if (!deletedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});  




app.post('/applicable-wages', (req, res) => {
  const { staffNr, gender, year , year23 ,year24, year25, year26 } = req.body;


  Applicable.create({ staffNr, gender, year, year23 ,year24, year25, year26 })
    .then(applicable => res.json({ status: "OK" }))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});


app.get('/applicable-wages', async (req, res) => {
    try {
      const data = await Applicable.find(); 
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

app.delete('/applicable-wages/:staffNr', async (req, res) => {
    const staffNr = req.params.staffNr;
  
    try {
      const deletedEmployee = await Applicable.findOneAndDelete({ staffNr });
  
      if (!deletedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});  

app.post('/probability', (req, res) => {
  const { staffNr, gender, year , year23 ,year24, year25, year26 } = req.body;


  Probability.create({ staffNr, gender, year, year23 ,year24, year25, year26 })
    .then(probability => res.json({ status: "OK" }))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});


app.get('/probability', async (req, res) => {
    try {
      const data = await Staying.find(); 
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

app.delete('/probability/:staffNr', async (req, res) => {
    const staffNr = req.params.staffNr;
  
    try {
      const deletedProb = await Probability.findOneAndDelete({ staffNr });
  
      if (!deletedProb) {
        return res.status(404).json({ message: 'Not found' });
      }
  
      res.json({ message: 'Deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
}); 

app.post('/probability-staying', (req, res) => {
  const { staffNr, gender, year , year23 ,year24, year25, year26 } = req.body;


  Probability.create({ staffNr, gender, year, year23 ,year24, year25, year26 })
    .then(probability => res.json({ status: "OK" }))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});


app.get('/probability-staying', async (req, res) => {
    try {
      const data = await Staying.find(); 
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

app.delete('/probability-staying/:staffNr', async (req, res) => {
    const staffNr = req.params.staffNr;
  
    try {
      const deletedProb = await Staying.findOneAndDelete({ staffNr });
  
      if (!deletedProb) {
        return res.status(404).json({ message: 'Not found' });
      }
  
      res.json({ message: 'Deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});  


app.post('/employer-mpf', (req, res) => {
  const { staffNr, gender, year , year23 ,year24, year25, year26 } = req.body;


  Employermpf.create({ staffNr, gender, year, year23 ,year24, year25, year26 })
    .then(employermpf => res.json({ status: "OK" }))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});


app.get('/employer-mpf', async (req, res) => {
    try {
      const data = await Employermpf.find(); 
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

app.delete('/employer-mpf/:staffNr', async (req, res) => {
    const staffNr = req.params.staffNr;
  
    try {
      const deletedProb = await Employermpf.findOneAndDelete({ staffNr });
  
      if (!deletedProb) {
        return res.status(404).json({ message: 'Not found' });
      }
  
      res.json({ message: 'Deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
}); 



app.post('/longservice-payment', (req, res) => {
  const { staffNr, gender,sumofLsp,lspOff, year , year23 ,year24, year25, year26 } = req.body;


  LongPayment.create({ staffNr, gender,sumofLsp,lspOff, year, year23 ,year24, year25, year26 })
    .then(employermpf => res.json({ status: "OK" }))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});


app.get('/longservice-payment', async (req, res) => {
    try {
      const data = await LongPayment.find(); 
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

app.delete('/longservice-payment/:staffNr', async (req, res) => {
    const staffNr = req.params.staffNr;
  
    try {
      const deletedProb = await LongPayment.findOneAndDelete({ staffNr });
  
      if (!deletedProb) {
        return res.status(404).json({ message: 'Not found' });
      }
  
      res.json({ message: 'Deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
}); 









app.post('/projected-life' , (req, res) => {
  const { gender,year,age,probofDying,numofSuv,numofDeaths,numofP,totalofP,expecofLife } = req.body;
  console.log('Received data:', { gender,year,age,probofDying,numofSuv,numofDeaths,numofP,totalofP,expecofLife });
  Projected.create({ gender,year,age,probofDying,numofSuv,numofDeaths,numofP,totalofP,expecofLife })
      .then(projected => res.json({ status: "OK" }))
      .catch(err => {
          res.status(500).json({ error: "Internal Server Error" });
      });
})

app.get('/projected-life', async (req, res) => {
  try {
    const data = await Projected.find(); 
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.delete('/projected-life/:age', async (req, res) => {
  const age = req.params.age;

  try {
    const deletedProjected = await Projected.findOneAndDelete({ age });

    if (!deletedProjected) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});  



app.listen(5000, () => {
    console.log(`Server running on port 5000`)
})