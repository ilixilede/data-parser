import os
import json
from dataclasses import dataclass
from typing import List

@dataclass
class ParsedData:
    name: str
    values: List[float]

class DataParser:
    def __init__(self, file_path: str):
        self.file_path = file_path

    def parse(self) -> List[ParsedData]:
        if not os.path.exists(self.file_path):
            raise FileNotFoundError(f"The file {self.file_path} does not exist.")
        
        try:
            with open(self.file_path, 'r') as file:
                data = json.load(file)
                parsed_data = []
                for item in data:
                    parsed_data.append(ParsedData(name=item['name'], values=item['values']))
                return parsed_data
        except json.JSONDecodeError as e:
            raise ValueError(f"Failed to parse JSON: {e}")

def main():
    parser = DataParser('data.json')
    try:
        parsed_data = parser.parse()
        for data in parsed_data:
            print(f"Name: {data.name}, Values: {data.values}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()