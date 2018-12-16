from functools import reduce

f = open('inputs/day2.txt', 'r')
paper = 0
ribbon = 0

for line in f:
    lst = line.rstrip().split('x')
    l, w, h = [int(i) for i in lst]
    dimensions = []
    dimensions.append(2*l*w)
    dimensions.append(2*w*h)
    dimensions.append(2*h*l)

    minDimension = min(dimensions)
    paper += sum(dimensions)
    paper += minDimension/2

    size = [l, w, h]
    smallest = size
    smallest.remove(max(size))

    ribbon += 2 * sum(smallest)
    ribbon += reduce((lambda x, y: x * y), [l, w, h])

#Part 1
print(paper)
print(ribbon)