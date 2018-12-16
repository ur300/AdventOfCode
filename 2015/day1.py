import re

f = open('inputs/day1.txt', 'r')

content = f.read()

print(len(re.findall(r'\(', content)) - len(re.findall(r'\)', content)))

def parse (inp):
    i = 0
    floor = 0

    while i <= len(inp):
        if inp[i] == '(':
            floor += 1
        elif inp[i] == ')':
            floor -= 1

        if floor == -1:
            break

        i += 1
    return i

pos = parse(content)

print(pos+1)