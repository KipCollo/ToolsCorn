from abc import ABC,abstractmethod

class Stream(ABC):

    @abstractmethod
    def open(self):
        pass

    @abstractmethod
    def read(self):
        pass

class File(Stream):
      
    def open(self):
        print("open from file")

   
    def read(self):
        print("Read from file")

file =File()
file.open()