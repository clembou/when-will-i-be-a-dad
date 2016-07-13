# -*- coding: utf-8 -*-
"""
Created on Mon Jul 11 09:05:56 2016

@author: aclerc
"""

import pandas as pd
import datetime as dt

#When will I be a dad?

def todays_prob(due_date = dt.datetime(2016,7,21,12)):

    df = pd.read_csv("probs.csv")
    today = dt.datetime.now()
    days_to_due = int((today - due_date).total_seconds()/3600.0/24.0)

    #raw probability
    raw_prob = df["Prob"][df["Day relative to due date"] == days_to_due]

    #conditional probability
    past_prob = sum(df["Prob"][df["Day relative to due date"] < days_to_due])
    cond_prob = raw_prob / (1.0 - past_prob)
    cond_prob = float(cond_prob) * 100.

    return cond_prob

def cumulative_graph(due_date = dt.datetime(2016,7,21,12)):
    from flask import render_template
    df = pd.read_csv("probs.csv")
    today = dt.datetime.now()
    days_to_due = int((today - due_date).total_seconds()/3600.0/24.0)
    df['Date'] = df['Day relative to due date'].apply( lambda d : dt.timedelta(days=d)) + due_date
    df['Date'] = df['Date'].dt.strftime('"%Y-%m-%d, ')
    df["Cumulative"] = df["Prob"].cumsum()
    df['newline'] = u'\n" + '

    with open('static/graph.html') as f:
        s = f.read()
        s = s.replace("{data}",df[['Date','Cumulative','newline']].to_string(header=False,index=False))

    return s



if __name__ == "__main__":
    y = cumulative_graph()
    print("There is a %.1f%% chance you will be a dad today" % y)
