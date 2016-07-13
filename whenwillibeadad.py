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

if __name__ == "main":
    y = todays_prob()
    print("There is a %.1f%% chance you will be a dad today" % y)
